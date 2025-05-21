import { Platform } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AUTH_KEY = 'user_authenticated';
const USERNAME_KEY = 'registered_username';
const EMAIL_KEY = 'registered_email';
const PASSWORD_KEY = 'registered_password';

const getStorage = () => {
  if (Platform.OS === 'web') {
    console.log('DEBUG (authStorage): Usando AsyncStorage (localStorage) para web.');
    return {
      setItem: async (key, value) => {
        console.log(`DEBUG (authStorage): localStorage setItem - Chave: ${key}, Valor: ${value}`);
        await AsyncStorage.setItem(key, value);
      },
      getItem: async (key) => {
        const value = await AsyncStorage.getItem(key);
        console.log(`DEBUG (authStorage): localStorage getItem - Chave: ${key}, Valor: ${value}`);
        return value;
      },
      deleteItem: async (key) => {
        console.log(`DEBUG (authStorage): localStorage deleteItem - Chave: ${key}`);
        await AsyncStorage.removeItem(key);
      },
    };
  } else {
    console.log('DEBUG (authStorage): Usando SecureStore para mobile.');
    return {
      setItem: async (key, value) => {
        console.log(`DEBUG (authStorage): SecureStore setItem - Chave: ${key}, Valor: ${value}`);
        await SecureStore.setItemAsync(key, value);
      },
      getItem: async (key) => {
        const value = await SecureStore.getItemAsync(key);
        console.log(`DEBUG (authStorage): SecureStore getItem - Chave: ${key}, Valor: ${value}`);
        return value;
      },
      deleteItem: async (key) => {
        console.log(`DEBUG (authStorage): SecureStore deleteItem - Chave: ${key}`);
        await SecureStore.deleteItemAsync(key);
      },
    };
  }
};

const currentStorage = getStorage();

/**
 * Salva as credenciais do usuário.
 * @param {string} username - O nome de usuário.
 * @param {string} email - O email do usuário.
 * @param {string} password - A senha do usuário (ATENÇÃO: Não seguro para web em produção).
 */
export const saveUserCredentials = async (username, email, password) => {
  console.log('DEBUG (authStorage): Iniciando saveUserCredentials...');
  await currentStorage.setItem(USERNAME_KEY, username);
  await currentStorage.setItem(EMAIL_KEY, email);
  await currentStorage.setItem(PASSWORD_KEY, password);
  console.log('DEBUG (authStorage): saveUserCredentials concluído.');
};

/**
 * Verifica se as credenciais fornecidas correspondem às credenciais armazenadas.
 * @param {string} email - O email para verificar.
 * @param {string} password - A senha para verificar.
 * @returns {Promise<boolean>} True se as credenciais forem válidas, False caso contrário.
 */
export const verifyUserCredentials = async (email, password) => {
  console.log('DEBUG (authStorage): Iniciando verifyUserCredentials...');
  const storedEmail = await currentStorage.getItem(EMAIL_KEY);
  const storedPassword = await currentStorage.getItem(PASSWORD_KEY);
  
  console.log(`DEBUG (authStorage): Digitado - Email: "${email}", Senha: "${password}"`);
  console.log(`DEBUG (authStorage): Armazenado - Email: "${storedEmail}", Senha: "${storedPassword}"`);

  const isValid = email === storedEmail && password === storedPassword;
  console.log(`DEBUG (authStorage): Credenciais válidas? ${isValid}`);
  return isValid;
};

/**
 * Define o status de autenticação do usuário.
 * @param {boolean} status - True para autenticado, False para não autenticado.
 */
export const setAuthenticatedStatus = async (status) => {
  console.log(`DEBUG (authStorage): Definindo status de autenticação para: ${status}`);
  await currentStorage.setItem(AUTH_KEY, status ? 'true' : 'false');
};

/**
 * Obtém o status de autenticação do usuário.
 * @returns {Promise<boolean>} True se o usuário estiver autenticado, False caso contrário.
 */
export const getAuthenticatedStatus = async () => {
  const status = await currentStorage.getItem(AUTH_KEY);
  const isAuthenticated = status === 'true';
  console.log(`DEBUG (authStorage): Status de autenticação obtido: ${isAuthenticated}`);
  return isAuthenticated;
};

/**
 * Limpa todos os dados de autenticação armazenados.
 */
export const clearAuthStorage = async () => {
  console.log('DEBUG (authStorage): Limpando todos os dados de autenticação...');
  await currentStorage.deleteItem(AUTH_KEY);
  await currentStorage.deleteItem(USERNAME_KEY);
  await currentStorage.deleteItem(EMAIL_KEY);
  await currentStorage.deleteItem(PASSWORD_KEY);
  console.log('DEBUG (authStorage): Dados de autenticação limpos.');
};