# Quantum Field Theory

Following the standard text 'Introduction to Quantum Field Theory' by Peskin & Schroeder


## Problems

### 3.1 Lorentz group

Recall from Eq. (3.17) the Lorentz commutation relations
$$
  [ J^{\mu \nu}, J^{\rho \sigma}] = i(g^{\nu \rho} J^{\mu \sigma} - g^{\mu \rho} J^{\nu \sigma} - g^{\nu \sigma}J^{\mu \rho} - g^{\mu \sigma} J^{\nu \rho})
$$

(a) Define the generators of rotations and boosts as 
$$
  L^i = \frac{1}{2}\epsilon^{ijk}J^{jk}, \quad K^i = J^{0i}
$$
where $i, j, k = 1, 2, 3$. An infinitesimal Lorentz transformation can then be written
$$
  \Phi rightarrow (1 - i \pmb{\theta}\cdot \pmb{L} - i \pmb{\beta} \cdot \pmb{K} ) \Phi
$$

Write the commutation relations of these vector operators explicitly. (For example, $[L^i, L^j] = i \epsilon^{ijk} L^k$). Show that the combinations
$$
  \pmb{J_+} = \frac{1}{2} (\pmb{L} + i \pmb{K}) \quad \text{and} \quad  \pmb{J_{-}} = \frac{1}{2} (\pmb{L} - i \pmb{K})
$$
commute with each other and seperately satisfy the commutation relations of angular momentum.


#### Solution

 Computing the commutation relations explicitly for the vector operators. Using the cyclic properties of the levi-civita symbol
$$
\begin{align}
  [L^i, L^j] 
  &= \epsilon^{iab} \epsilon^{jcd}[J^{ab}, J^{cd}]  \\
  &= i\epsilon^{iab} \epsilon^{jcd} (g^{bc} J^{ad} - g^{ac} J^{bd} - g^{bd}J^{ac} - g^{ad} J^{bc}) \\
  &= i\epsilon^{iab}  (\epsilon^{jcd}g^{bc} J^{ad} -\epsilon^{jcd} g^{ac} J^{bd} -\epsilon^{jcd} g^{bd}J^{ac} -\epsilon^{jcd} g^{ad} J^{bc}) \\
  &= i\epsilon^{iab}  (\epsilon^{jcd}g^{bc} J^{ad} -\epsilon^{jcd} g^{ac} J^{bd} +\epsilon^{jcd} g^{bc}J^{ad} +\epsilon^{jcd} g^{ac} J^{bd}) \\
  &= 2i\epsilon^{iab}\epsilon^{jcd}g^{bc}J^{ad}
\end{align}
$$

The expressions for $\pmb{J_+}$ and $\pmb{J_-}$ provide the _complexification_ of the Lorentz algebra.



